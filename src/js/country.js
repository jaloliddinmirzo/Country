const country = document.querySelector("#country")
const wrap = document.querySelector(".wrap")
const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString)

const country_name = urlParams.get("nomi")



async function getContry(name) {
    wrap.classList.toggle("hidden")
    const req = await fetch(`https://restcountries.com/v3.1/name/${name}`)

    const data = await req.json()

    if (data.length > 0) {
        const { borders, population, name, region, subregion, capital, tld, languages, flags, currencies } = data[0]

        let borderNames = []
        if (borders) {
            for (const border of borders) {
                const req = await fetch(`https://restcountries.com/v3.1/alpha/${border}`)

                const data = await req.json()
                borderNames.push(data[0].name.common)

            }
        }

        let leng = Object.values(languages)
        let el = ` 
        <img src=${flags.png} alt="" width="560" height="401">

        <div >
            <h1 class=" font-bold text-3xl mb-6">${name.common}</h1>
            <div class="flex justify-between gap-36 mb-16">
                <ul class="flex flex-col gap-2">
                    <li class="txet-sm font-semibold">
                        Native Name: <span class="opacity-75">${Object.values(name.nativeName)[0].official}</span></li>
                    <li class="txet-sm font-semibold">
                        Population: <span class="opacity-75">${population}</span></li>
                    <li class="txet-sm font-semibold">
                        Region: <span class="opacity-75"> ${region}</span></li>
                    <li class="txet-sm font-semibold">
                        Sub Region: <span class="opacity-75">${subregion}</span></li>
                    <li class="txet-sm font-semibold">
                        Capital: <span class="opacity-75">${capital}</span></li>
                  </ul>
                <ul class="flex flex-col gap-2">
                    <li class="txet-sm font-semibold">
                        Top Level Domain: <span class="opacity-75">${tld}</span></li>
                    <li class="txet-sm font-semibold">
                        Currencies: <span class="opacity-75">${Object.values(currencies)[0].name}</span></li>
                    <li class="txet-sm font-semibold">
                        Languages: <span class="opacity-75">${leng}</span></li>
                  </ul>
                </div>
                <div class="flex gap-4 ">
                  <h1 class="font-semibold">Border Countries: </h1>
                  <ul class="flex gap-2.5 max-w-sm flex-wrap">
                  ${borderNames
                .map(
                    border => `<a href= "country.html?nomi=${border}" class="py-1 px-7 shadow dark:bg-[#2B3844] text-sm cursor-pointer">${border}</a>`
                )
            }
                  </ul>
                </div>
        </div>
        `
        country.innerHTML = el
        wrap.classList.toggle("hidden")

    }

}

getContry(country_name)



const dark = document.querySelector("#dark")
const light = document.querySelector("#light")
const arrow = document.querySelector("#arrow")
const arrowDark = document.querySelector("#arrowDark")

const html = document.querySelector("html")

const local = localStorage.getItem("key")

// Theme
const Dark = () => {
    light.classList.toggle('hidden')
    dark.classList.toggle('hidden')
    arrow.classList.toggle('hidden')
    arrowDark.classList.toggle('hidden')
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