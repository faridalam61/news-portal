// Load news categories
const getCategories = ()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then (categories => displayCategories(categories.data))
}

// Display loaded categories to DOM
const displayCategories = (data)=>{
    const navbar = document.getElementById('nav');
    data.news_category.forEach(categories => {
        navbar.innerHTML += `<p href="" onclick = "loadNews('${categories.category_id}','${categories.category_name}')" class="cursor-pointer">${categories.category_name}</p>`
    })
}

// Load news from the api
const loadNews = (id,name)=>{
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then(res => res.json())
    .then(data => createNewsCard(data.data,name))
    
}
loadNews('01','Breaking News');
// Display loaded news to dom
const createNewsCard = (data,name)=>{
    const container = document.getElementById('all-news');
    const resultCount = document.getElementById('result-count');
    container.innerHTML='';
    resultCount.innerHTML = `${data.length} news found in ${name}`
   
    data.forEach(news =>{
        console.log(news)
        container.innerHTML += `
            <div class="flex flex-col lg:flex-row gap-4 lg:gap-2 rounded-lg border border-slate-800 dark:border-slate-500 bg-white dark:bg-slate-600 mb-6">
                <div class="w-full lg:w-2/6 p-4">
                    <img src="${news.image_url}" alt="" class="rounded-t-lg lg:rounded-l-lg w-full h-96 lg:h-full">
                </div>
                <div class="w-full lg:w-4/6 p-4">
                    <h2 class="text-xl font-bold mb-4">${news.title}</h2>
                    <p>${news.details.slice(0,200)}</p>

                    <div class="flex justify-between items-center mt-6">
                        <div class="flex gap-2">
                            <img src='${news.author.img}' class="rounded-full w-10"/>
                            <span>
                                <p class="text-sm">${news.author.name}</p>
                                <p class="text-sm">${news.author.published_date}</p>
                            </span>
                        </div>    

                        <div>
                        <i class="fa-solid fa-eye"></i>
                        ${news.total_view}
                        </div>
                        <p><i class="fa-solid fa-star"></i> ${news.rating.number}</p>
                        <label for="my-modal-3" class="cursor-pointer" onclick="readMore()"><i class="fa-solid fa-arrow-right"></i></label>
                        
                       
                    </div>
                </div>
            </div>
        `;
    })

}

// Article details / read more
const readMore = ()=>{
    console.log('ok')
}