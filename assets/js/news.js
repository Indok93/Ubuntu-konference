const myNews = document.getElementById("news");
myNews.classList = "newsCard";

buildCard("Heading 1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "https://i.ytimg.com/vi/GHhFtkGfaWU/hqdefault.jpg");
buildCard("Heading 2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "https://www.rd.com/wp-content/uploads/2020/11/GettyImages-899747778-e1606165481516.jpg");
buildCard("Heading 3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "https://images.unsplash.com/photo-1593871075120-982e042088d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVubnklMjBhbmltYWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80");
buildCard("Heading 4", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "https://www.boredpanda.com/blog/wp-content/uploads/2014/05/funny-animals-doing-yoga-2.jpg");
buildCard("Heading 5", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "https://berlingske.bmcdn.dk/media/cache/resolve/teaser_image_vertical/image/6/68267/15051296-11kulnoter-kbh-shrek-093237jpg.jpeg");
buildCard("Heading 6", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Two_red_dice_01.svg/220px-Two_red_dice_01.svg.png");
buildCard("Heading 7", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Two_red_dice_01.svg/220px-Two_red_dice_01.svg.png");
buildCard("Heading 8", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Two_red_dice_01.svg/220px-Two_red_dice_01.svg.png");

function buildCard(myHtwo, myDescription, myUrl){

    // creating elements for card
    const myCard = document.createElement("figure");
    const cardHeadline = document.createElement("h2");
    const cardDescription = document.createElement("p");
    const cardImage = document.createElement("img");

    // Assign elements corresponding values
    cardHeadline.innerText = myHtwo;
    cardDescription.innerHTML = myDescription;
    cardImage.src = myUrl;
    

    // append card
    myNews.appendChild(myCard);
    myCard.appendChild(cardHeadline);
    myCard.appendChild(cardDescription);
    myCard.appendChild(cardImage);
}