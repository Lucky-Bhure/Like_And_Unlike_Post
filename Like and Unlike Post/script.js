let post = document.getElementById("post");
let likeimg = document.getElementById("likeimg");
let like = document.getElementById("like");


let count  = 0;
function likeevent(){

    if( count === 0){
        post.src="https://static.wixstatic.com/media/a20ff5_3ec6ca00713440568e02a3eae4ab6c96~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a20ff5_3ec6ca00713440568e02a3eae4ab6c96~mv2.jpg";
        likeimg.src = "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/thumbs-down-balck-icon.png";
        like.textContent = "Unlike";
        like.style.background = "grey";
        count = 1;
    } else {
        post.src="https://assets.petbacker.com/user-images/320/l_5c637dd2c8.5fc13e5311290.jpg";
        likeimg.src = "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/blue-like-button-icon.png";
        like.textContent = "Like";
        like.style.background = "#065fd4";
        count = 0;
    }
    
    
}