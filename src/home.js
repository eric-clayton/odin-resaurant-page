import image from './images/pexels-pixabay-262978.jpg'
export default function Home() {
    const frag = document.createDocumentFragment();
    const h2 = document.createElement('h2');
    h2.textContent = "Home";
    frag.appendChild(h2)
    const p = document.createElement('p');
    p.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Morbi mattis velit vitae ipsum semper porta. 
                    Donec finibus id ex at luctus. Cras ut mauris in lacus luctus scelerisque convallis nec mauris.
                    Aenean a varius purus. Aenean varius pharetra ante vel finibus. 
                    Integer sit amet dapibus est. Sed ut elit et elit sodales congue. 
                    `
    frag.appendChild(p);
    const img = document.createElement('img');
    img.src = image;
    frag.appendChild(img);
    return frag;
}