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
        navbar.innerHTML += `<p href="" onclick = "loadNews('${categories.category_id}')" class="cursor-pointer">${categories.category_name}</p>`
    })
}

// Load news from the api
const loadNews = (id)=>{
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then(res => res.json())
    .then(data => createNewsCard(data.data))
}

// Display loaded news to dom
const createNewsCard = (data)=>{
    const container = document.getElementById('all-news');
    container.innerHTML='';
    data.forEach(news =>{
        console.log(news);
        container.innerHTML += `
            <div class="flex flex-col lg:flex-row gap-4 rounded-lg border border-slate-800 dark:border-slate-500 bg-white dark:bg-slate-600 mb-6">
                <div class="w-full lg:w-2/6">
                    <img src="${news.image_url}" alt="" class="rounded-t-lg lg:rounded-l-lg w-full h-96 lg:h-full">
                </div>
                <div class="w-full lg:w-4/6 p-4">
                    <h2 class="text-xl font-bold mb-4">${news.title}</h2>
                    <p>${news.details.slice(0,200)}</p>

                    <div class="flex justify-between mt-6">
                        <p>lorem</p>
                        <p>lorem</p>
                        <p>lorem</p>
                        <p>lorem</p>
                    </div>
                </div>
            </div>
        `;
    })

}