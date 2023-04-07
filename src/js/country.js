const country = document.querySelector("#country")
const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString)

const country_name = urlParams.get("nomi")



async function getContry(name){
    const req = await fetch(`https://restcountries.com/v3.1/name/${name}`)

    const data = await req.json()

    if (data.length > 0) {
        const info = data[0]

        for (const border of info.borders) {
            const req = await fetch(`https://restcountries.com/v3.1/alpha/${border}`)

            let borderNames = []
            const data = await req.json()
            borderNames.push(data.name.common)
            
        }
        console.log(data);
        let  el = ` 
        <img src=${info.flags.png} alt="" width="560" height="401">

        <div >
            <h1 class=" font-bold text-3xl mb-6">${info.name.common}</h1>
            <div class="flex justify-between gap-36 mb-16">
                <ul class="flex flex-col gap-2">
                    <li class="txet-sm font-semibold">
                        Native Name: <span class="opacity-75">${info}</span></li>
                    <li class="txet-sm font-semibold">
                        Population: <span class="opacity-75">${info.population}</span></li>
                    <li class="txet-sm font-semibold">
                        Region: <span class="opacity-75"> ${info.region}</span></li>
                    <li class="txet-sm font-semibold">
                        Sub Region: <span class="opacity-75">${info.subregion}</span></li>
                    <li class="txet-sm font-semibold">
                        Capital: <span class="opacity-75">${info.capital}</span></li>
                  </ul>
                <ul class="flex flex-col gap-2">
                    <li class="txet-sm font-semibold">
                        Top Level Domain: <span class="opacity-75">${info.tld}</span></li>
                    <li class="txet-sm font-semibold">
                        Currencies: <span class="opacity-75">${info}</span></li>"*/
                    <li class="txet-sm font-semibold">
                        Languages: <span class="opacity-75">${info.languages.eng}</span></li>
                  </ul>
                </div>
                <div class="flex gap-4">
                  <h1 class="font-semibold">Border Countries: </h1>
                  <ul class="flex gap-2.5
                  ">
                      <li class="py-1 px-7 shadow text-sm cursor-pointer">${info.languages.eng}</li>
                  </ul>
                </div>
        </div>
        `
    }

    
   
}

getContry(country_name)