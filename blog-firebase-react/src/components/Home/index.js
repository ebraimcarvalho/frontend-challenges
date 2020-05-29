import React from 'react';

function Home() {

  // useEffect(() => {
  //   firebase.app.ref('posts').once('value', (snapshot)=> {
  //     let state = [1, 2]

  //     snapshot.forEach((childItem)=>{
  //       state.push({
  //         key: childItem.key,
  //         titulo: childItem.val().title,
  //         image: childItem.val().url,
  //         descricao: childItem.val().description,
  //         autor: childItem.val().author,
  //       })
  //     });
  //     setFirebaseInitialized(state.length);
  //   })
  // }, [])

  return (
    <div>
      home
    </div>
  )
}

export default Home;