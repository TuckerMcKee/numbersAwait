const $num1 = $('#num-1');
const $num2 = $('#num-2');
const $facts = $('#facts');
const $factBtn1 = $('#fact-btn-1');
const $factBtn2 = $('#fact-btn-2');
const $factBtn3 = $('#fact-btn-3');

const baseURL = 'http://numbersapi.com/'

async function getNumFact(e) {
    e.preventDefault()
    console.log('in getNumFact')
    let num = $num1.val()
    let res = await axios.get(`${baseURL}${num}?json`)
    $facts.text(res.data.text)
}

async function getFourNumFacts(e) {
    e.preventDefault()
    console.log('in getFourNumFacts')
    let num = $num1.val()
    let facts = []
    for (let i = 1; i < 5; i++) {
        let res = await axios.get(`${baseURL}${num}?json`)
        facts.push(res)
    }
    facts.forEach(res => $facts.append(`${res.data.text}<br>`))
}

async function getMultiNumFact(e) {
    e.preventDefault()
    console.log('in getMultiNumFact')
    let nums = $num2.val()
    let res = await axios.get(`${baseURL}${nums}`)
    $facts.text('') 
    Object.keys(res.data).forEach(key => {
        $facts.append(`${res.data[key]}<br>`)})
}

$factBtn1.on('click',getNumFact)
$factBtn2.on('click',getMultiNumFact)
$factBtn3.on('click',getFourNumFacts)