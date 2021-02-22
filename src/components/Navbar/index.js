import React from 'react';

const index = () => {
  return (
    <nav class="navbar navbar-expand-lg">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/newpost">Post</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/playlist">Playlists</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/weather">Weather</a>
        </li>
      </ul>
    </div>
    <p>
        Hiker Diaries
      </p>
  </nav>
  )
}

export default index




// class Navbar extends React.Component {
//     render() {
//         return <>
        
//             <nav>
//                 <p>Hiker Diaries</p>
//                 <ul>
//                     <li>
//                         <Link to="/"> Home </Link>
//                         </li>
//                     <li><a> Post </a>
//                         <ul>
//                             <li>
//                                 <Link to="/newpost"> Create New </Link>
//                             </li>
//                         </ul>
//                     </li>
//                     <li><a> Plan </a>
//                         <ul>
//                             <li>
//                                 <Link to="/weather"> Check Weather</Link>
//                             </li>
//                             <li>
//                                 <Link to="/playlist"> Find Playlist </Link>
//                             </li>
//                         </ul>
//                     </li>       
//                 </ul>   
//             </nav>
         
        
        
//         </>
//     };
// };

// export default Navbar