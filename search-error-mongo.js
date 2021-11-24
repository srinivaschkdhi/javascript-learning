db.statusTrack.find({status:{$in:["SCRAPE_FAIL","UPDATE_SKIPPED","UPDATE_FAIL"]}
,startDate:{$gte:ISODate("2020-11-22T00:00:00.407+00:00")}}).forEach((document)=>{
    
    const scrapeStatus = document.jobsScrapeStatus;

    for (const key in scrapeStatus) {
            const obj = scrapeStatus[key];

            const info = obj.info;

        if(info.includes("GATEWAY_ADAPTER_FUNC_EXECUTE_ERROR")){
            print(obj)
        }
    }

})
