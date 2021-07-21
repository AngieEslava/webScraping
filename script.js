// https://www.youtube.com/watch?v=RDrm7ZD6z0Y
const puppeteer = require('puppeteer')
const fs = require('fs')

async function run() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    let reviews = [ ]
    async function getPageData(){
        await page.goto('https://zwangerpesiri.isolvedhire.com/jobs/')
        const data = await page.evaluate(()=> {
            const $reviews = document.querySelectorAll('.strip-side-borders')
            const data = []
            $reviews.forEach(($review) =>{
                data.push({
                    enlace: $review.href,
                    job: $review.querySelector('.job-info h4').innerText,
                    location: $review.querySelector('.job-info li').innerText,
                })
            })
            return {
                reviews:data,
            }
        })
        reviews = [...reviews, data.reviews]
        console.log(data)
        fs.writeFile('data.json', JSON.stringify(reviews), () => {
            console.log('data writed')
        })
        await browser.close()
    }
    getPageData()
}
run()