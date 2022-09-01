const iTalks = document.getElementById("iot-talks");
const dTalks = document.getElementById("desktop-talks");
const myContainer = document.querySelector("main");
myContainer.classList = "mainGrid";
iTalks.classList = "italks-card";
dTalks.classList = "dtalks-card";
// First IOT talk
let iotOneHeading = "What is OpenStack?";
let iotOneDescription = "OpenStack is an open-source cloud platform that manages distributed compute, network and storage resources, aggregates them into pools, and allows on-demand provisioning of virtual resources through a self-service portal." + "<br> OpenStack is a cost-effective extension of the existing public cloud infrastructure, enabling organisations to optimise their cloud maintenance costs and service providers to build an infrastructure competitive to hyperscalers.";
let iotOneImg = src="/assets/images/Ubuntu-materiale/speakers/IOT/olav_eriksenOP.jpg";

// Second IOT talk
let iotTwoHeading = "OpenStack ensures TCO reduction";
let iotTwoDescription = "Since more and more organisations are using hybrid multi-cloud architecture, implementing an own cloud is a natural step once the number of workloads grows. Although CapEx costs associated with an initial deployment of the OpenStack are high, its OpEx costs are significantly lower compared to hyperscalers. As a result, the aggregated total cost of ownership (TCO) is lower when running workloads in the long term and at scale. This allows businesses to optimise their cloud maintenance costs and service providers to build an infrastructure competitive to hyperscalers.";
let iotTwoImg = src="/assets/images/Ubuntu-materiale/speakers/IOT/mamouhd_hassanOP.jpg";

// Third IOT talk
let iotThirdHeading = "What is Kubernetes?";
let iotThirdDescription = "Kubernetes, or k8s for short, is an open source platform pioneered by Google, which started as a simple container orchestration tool but has grown into a cloud native platform." + "<br> It’s one of the most significant advancements in IT since the public cloud came to being in 2009, and has an unparalleled 5-year 30% growth rate in both market revenue and overall adoption.";
let iotThirdImg = src="/assets/images/Ubuntu-materiale/speakers/IOT/louise_nielsenOP.jpg";

// Fourth IOT talk
let iotFourthHeading = "Container orchestration?";
let iotFourthDescription = "Container orchestration is about managing the lifecycle of containers, particularly in large, dynamic environments. It automates the deployment, networking, scaling, and availability of containerised workloads and services. Running containers - which are lightweight and usually ephemeral by nature - in small numbers, is easy enough to be done manually. However, managing them at scale in production environments can be a significant challenge without the automation that container orchestration platforms offer. Kubernetes has become the standard for container orchestration in the enterprise world.";
let iotFourthImg = src="/assets/images/Ubuntu-materiale/speakers/IOT/joe_petersonOP.jpg";

// Fifth IOT talk
let iotFifthHeading = "The future of robotics ";
let iotFifthDescription = "ROS is powering the future of robotics in industry, in the enterprise and for developers Ubuntu has been the primary platform for ROS from the very beginning, thanks to its flexibility and user-friendliness." + "<br> ROS is led by Open Robotics, similar to how Canonical supports Ubuntu; Open Robotics steers the ship but it is driven by the community." + "<br> As the robotics industry grows, companies and developers continue turning to Open Robotics and Canonical to help make their vision a reality.";
let iotFifthImg = src="/assets/images/Ubuntu-materiale/speakers/IOT/alice_jennings.jpg";

// First Desktop talk
let desktopFirstHeading = "Open source";
let desktopFirstDescription = "Ubuntu has always been free to download, use and share. We believe in the power of open source software; Ubuntu could not exist without its worldwide community of voluntary developers." + "<br> So where does opensource go in 2022.";
let desktopFirstImg = src="/assets/images/Ubuntu-materiale/speakers/Desktop/sarah_souidanOP.jpg";

// Second Desktop talk
let desktopSecondHeading = "Linux in the wild";
let desktopSecondDescription = "Canonical works closely with Dell, Lenovo and HP to certify that Ubuntu works on a wide range of their laptops and workstations. It means that a seamless Ubuntu experience is available out of the box with more hardware choice than ever. And Ubuntu isn’t just for the desktop, it is used in data centres around the world powering every kind of server imaginable and is by far, the most popular operating system in the cloud.";
let desktopSecondImg = src="/assets/images/Ubuntu-materiale/speakers/Desktop/Lis_nielsenOP.jpg";

// Third Desktop talk
let desktopThirdHeading = "Ubuntu Desktop for the enterprise";
let desktopThirdDescription = "Ubuntu Advantage is the professional support package from the experts at Canonical. Get 24x7 support with access to engineers with first-hand experience of your issues. It includes Landscape, the systems management tool, for monitoring, managing, patching, and compliance reporting on all your Ubuntu desktops.";
let desktopThirdImg = src="/assets/images/Ubuntu-materiale/speakers/Desktop/line_dalsgaardOP.jpg";

// Fourth Desktop talk
let desktopFourthHeading = "Ubuntu flavours";
let desktopFourthDescription = "Ubuntu flavours offer a unique way to experience Ubuntu with different choices of default applications and settings, backed by the full Ubuntu archive for packages and updates.";
let desktopFourthImg = src="/assets/images/Ubuntu-materiale/speakers/Desktop/Dan_JantzenOP.jpg";

// Fifth Desktop talk
let desktopFifthHeading = "Canonical and ubuntu";
let desktopFifthDescription = "Canonical is a global software company and the number-one Ubuntu services provider. Companies can choose to receive expert training, support or consultancy for a fee that goes towards the continued development of Ubuntu.";
let desktopFifthImg = src="/assets/images/Ubuntu-materiale/speakers/Desktop/chris_smithOP.jpg";

buildCardLeft(iotOneHeading, iotOneDescription, iotOneImg);
buildCardLeft(iotTwoHeading, iotTwoDescription, iotTwoImg);
buildCardLeft(iotThirdHeading, iotThirdDescription, iotThirdImg);
buildCardLeft(iotFourthHeading, iotFourthDescription, iotFourthImg);
buildCardLeft(iotFifthHeading, iotFifthDescription, iotFifthImg);

buildCardRight(desktopFirstHeading, desktopFirstDescription, desktopFirstImg);
buildCardRight(desktopSecondHeading, desktopSecondDescription, desktopSecondImg);
buildCardRight(desktopThirdHeading, desktopThirdDescription, desktopThirdImg);
buildCardRight(desktopFourthHeading, desktopFourthDescription, desktopFourthImg);
buildCardRight(desktopFifthHeading, desktopFifthDescription, desktopFifthImg);

function buildCardLeft(myHtwo, myDescription, myImg){

    // creating elements for card
    const myCard = document.createElement("figure");
    const cardHeadline = document.createElement("h2");
    const cardDescription = document.createElement("p");
    const cardImage = document.createElement("img");

    // Assign elements corresponding values
    cardHeadline.innerText = myHtwo;
    cardDescription.innerHTML = myDescription;
    cardImage.src = myImg;
    

    // append card
    iTalks.appendChild(myCard);
    myCard.appendChild(cardHeadline);
    myCard.appendChild(cardDescription);
    myCard.appendChild(cardImage);
}

function buildCardRight(myHtwo, myDescription, myImg){

    // creating elements for card
    const myCard = document.createElement("figure");
    const cardHeadline = document.createElement("h2");
    const cardDescription = document.createElement("p");
    const cardImage = document.createElement("img");

    // Assign elements corresponding values
    cardHeadline.innerText = myHtwo;
    cardDescription.innerHTML = myDescription;
    cardImage.src = myImg;
    

    // append card
    dTalks.appendChild(myCard);
    myCard.appendChild(cardHeadline);
    myCard.appendChild(cardDescription);
    myCard.appendChild(cardImage);
}