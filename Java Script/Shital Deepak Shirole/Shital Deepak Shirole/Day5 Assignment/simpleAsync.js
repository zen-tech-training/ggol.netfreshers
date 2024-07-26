async function fetchData(){
    await setTimeout(()=>{
        console.log('data fetched');
    },3000);
}

fetchData();