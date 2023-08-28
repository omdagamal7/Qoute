let qoute = [
  {
    name: "God Of War",
    disc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea molestias consequuntur veniam dicta libero assumenda accusantium, itaque adipisci magnam, eos mollitia expedita. Commodi, eveniet blanditiis. Molestiae sequi eligendi qui veritatis?"
  },
  {
    name: "Cyper Bunk",
    disc: "veniam dicta libero assumenda accusantium, itaque adipisci magnam, eos mollitia expedita. Commodi, eveniet blanditiis. Molestiae sequi eligendi qui veritatis?"
  },
  {
    name: "Far Cry",
    disc: "itaque adipisci magnam, eos mollitia expedita. Commodi, eveniet blanditiis. Molestiae sequi eligendi qui veritatis?"
  },
  {
    name: "Tomb Raider",
    disc: "sit, amet consectetur adipisicing elit. Ea molestias consequuntur veniam "
  },
  {
    name: "GTA",
    disc: "officia explicabo numquam adipisci architecto molestias excepturi porro cumque quibusdam sapiente sed maiores repellendus error nulla illo suscipit, at omnis sint enim nisi laboriosam hic "
  },
  {
    name: "Assassins Creed",
    disc: "quasi numquam tenetur incidunt error, maiores quam hic itaque nihil aliquid quisquam tempore! Dolore, laborum iusto! Obcaecati animi quibusdam ut maiores "
  }
]


const btn = document.querySelector(".btn");
const Name = document.querySelector("#name");
const disc = document.querySelector("#disc");

btn.addEventListener("click",()=>{
  let randomNumber = Math.round(Math.random() * qoute.length)
  Name.innerHTML = qoute[randomNumber].name;
  disc.innerHTML = qoute[randomNumber].disc;
})
