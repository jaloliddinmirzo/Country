const inputEl = document.querySelector('input')
const form = document.querySelector('#form')
const select = document.querySelector('#select')
const countriesEL = document.querySelector('#countries')
const wrap = document.querySelector(".wrap")



form.addEventListener("submit", (e) => {
  e.preventDefault()
  getData(inputEl.value);
})

let countries = []

async function getData(name) {
  wrap.classList.toggle("hidden")
  if (name) {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const data = await res.json()

    countries = data;
  } else {
    const res = await fetch(`https://restcountries.com/v3.1/all`)
    const data = await res.json()

    countries = data;
  }
  upDateUI()
  wrap.classList.toggle("hidden")
}

// get Region
async function getByRegion(region) {
  wrap.classList.toggle("hidden")
  if (region) {
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`)
    const data = await res.json()

    countries = data;
  }
  upDateUI()
  wrap.classList.toggle("hidden")
}

select.addEventListener("change" , (e)=>{
    const region = e.target.value;
    getByRegion(region)
})


function upDateUI() {

  let html = ""

  countries.forEach(country => {
    html += `
        <div onclick="linkCountry('${country.name.common}')" class="bg-white dark:bg-[#2B3844] cursor-pointer  card-shadow w-[264px]">
          <img src=${country.flags.png} alt="flag.img">
          <div class="p-6">
            <h1 class="font-bold mb-4 text-lg">${country.name.common}</h1>
            <ul class="">
              <li class="txet-sm font-semibold">
                Population: <span class="opacity-75">${country.population}</span></li>
              <li class="txet-sm font-semibold">
                Region: <span class="opacity-75">${country.region}</span></li>
              <li class="txet-sm font-semibold">
              Capital: <span class="opacity-75">${country.capital}</span></li>
            </ul>
          </div>
        </div>
        `
  })

  countriesEL.innerHTML = html;
}

getData()



function linkCountry(name) {
  location.href = `country.html?nomi=${name}`
}



const dark = document.querySelector("#dark")
const light = document.querySelector("#light")
const html = document.querySelector("html")

const local = localStorage.getItem("key")

// Theme
const Dark = () => {
  light.classList.toggle('hidden')
  dark.classList.toggle('hidden')
  html.classList.toggle("dark")
}

if (local) {
  Dark()
}

function click(el) {
  if (el == dark) {
    el.addEventListener('click', () => {
      Dark()
      localStorage.setItem("key", "")
    })
  } else if (el == light) {
    el.addEventListener('click', () => {
      Dark()
      localStorage.setItem("key", "dark")
    })
  }
}

click(dark)
click(light)


