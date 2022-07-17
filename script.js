d3.csv('smalldata.csv', function (data) {
    d3.select('body')
        .append('p')
        .text(data.NA_Sales)
})