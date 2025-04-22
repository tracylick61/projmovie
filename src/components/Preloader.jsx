//function Preloader() {
 // return (
//    <div className="progress">
 //     <div className="indeterminate"></div>
      //    </div>
//  );
//}

//export { Preloader };

function Preloader() {
  return (
    <div className="preloader-container">
      <div className="preloader-ring"></div>
      <p>Загрузка...</p>
    </div>
  );
}

export { Preloader };
