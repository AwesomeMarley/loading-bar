javascript: (function(){

    var style = document.createElement('style');
      style.innerHTML = `
       #loading_bar{
        background: linear-gradient(90deg, rgba(0,74,255,1) 0%, rgba(0,78,255,1) 0%, rgba(0,212,255,1) 100%);
        position: fixed;
    
        top: 50%;
        left: 10%;
        width: 0%;
        height: 1.5%;
        border-radius: 10px;
    
        animation: loading;  
        animation-duration: 2s;
        animation-iteration-count: 1;
    
      }
    
       @keyframes loading {
          from {
          width: 0%;
          }
          to {
          width: 80%;
    
          }
        }
    
    
    
      `;
         document.head.appendChild(style);
    
    const loading_bar = document.createElement('div');
    loading_bar.id = 'loading_bar';
    document.body.append(loading_bar);
      
      
      
      
      
    })()