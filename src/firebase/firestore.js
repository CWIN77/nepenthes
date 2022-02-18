import firebase from './config';

const db = firebase.firestore();

export async function getHomeData(getStatus) {
  const sStorage = JSON.parse(sessionStorage.getItem("homeData"))
  const today = new Date();
  if(getStatus == 'add' && sStorage){
    let dataArray = sStorage;
    let lastDate = new Date(sStorage[sStorage.length - 1].date.seconds)
    await db.collection('post').where('date','<=',lastDate).orderBy("date", "desc").limit(10).get().then((docs)=>{
      docs.forEach((doc)=>{
        let data = doc.data();
        Object.assign(data, {id:doc.id});
        dataArray.push(data);
      })
    })
    sessionStorage.setItem('homeData',JSON.stringify(dataArray))
    return dataArray
  }else if(sStorage){
    return sStorage
  }else{
    let dataArray = [];
    await db.collection('post').where('date','<=',today).orderBy("date", "desc").limit(10).get().then((docs)=>{
      docs.forEach((doc)=>{
        let data = doc.data();
        Object.assign(data, {id:doc.id});
        dataArray.push(data);
      })
    })
    sessionStorage.setItem('homeData',JSON.stringify(dataArray))
    return dataArray
  }
}

export async function getUserData(uid){
  let userData;
  await db.collection('user').doc(uid).get().then((doc)=>{
    userData = doc.data()
    Object.assign(userData, {id:doc.id});
  })
  return userData
}

export async function getSearchData(keywordProp,searchMethod) {
  const keyword = keywordProp != '' ? keywordProp : false || sessionStorage.getItem("searchKeyword")
  if(keyword){
    sessionStorage.setItem("searchKeyword",keyword);
    let data = [];
    await db.collection('post').where(searchMethod,'==',keyword).get().then((docs)=>{
      docs.forEach((doc)=>{
        data.push(doc.data());
      })
    })
    return data
  }
  return false
}

export async function getUserPostData(uid) {
  let data = [];
  await db.collection('post').where('writer','==',uid).get().then((docs)=>{
    docs.forEach((doc)=>{
      data.push(doc);
    })
  })
  return data
}

export async function getMyPostData(uid) {
  const sStorage = JSON.parse(sessionStorage.getItem("myPost"));
  if(uid){
    if(sStorage){
      return sStorage
    }else{
      let dataArray = [];
      await db.collection('post').where('writer','==',uid).get().then((docs)=>{
        docs.forEach((doc)=>{
          dataArray.push(doc.data());
        })
      })
      sessionStorage.setItem('myPost',JSON.stringify(dataArray))
      return dataArray
    }
  }
}

export async function loginUser() {
  const user = JSON.parse(localStorage.getItem("user"));
  if(!user){
    var provider = new firebase.auth.GoogleAuthProvider();
    let resultUser;
    await firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      localStorage.setItem('user', JSON.stringify(result.user));
      resultUser = result.user
      alert('로그인 성공!');
      window.location.reload();
    }).catch((error) => {
      var errorMessage = error.message;
      alert('Error : ' + errorMessage);
    });
    return resultUser
  }else{
    return user
  }
}

export async function getBookmarkData(uid) {
  const bookmarkData = JSON.parse(sessionStorage.getItem("bookmarkData"));
  if(bookmarkData){
    return bookmarkData;
  }else if(uid){
    let data = [];
    await db.collection('post').where('bookmark','array-contains',uid).get().then((docs)=>{
      docs.forEach((doc)=>{
        data.push(doc.data());
      })
    })
    sessionStorage.setItem('bookmarkData',JSON.stringify(data))
    return data
  }
}

export function uploadPost(title,errMsg,content,writer) {
  const today = new Date();
  if(title != '' && errMsg != '' && content != '' && writer){
    db.collection('post').add({title:title,errMsg:errMsg,content:content,date:today,writer:writer,bookmark:[]}).then(()=>{
      alert("업로드 성공!");
    }).catch((err)=>{
      alert('Error : '+ err.message)
    })
  }else{
    alert('내용이 올바르지 않습니다.');
  }
}

