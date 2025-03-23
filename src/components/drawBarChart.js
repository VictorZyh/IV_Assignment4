import * as d3 from "d3";

export let drawBarChart = (barChatLayer, data, xScale, yScale, barChartWidth, barChartHeight) => {

    //Task 7: Complete the code to draw the bars
    //Hint:
    //1. The bars are drawn as rectangles
    //2. Add a mouseover event to the bar
    //3. The mouseover event should also highlight the corresponding points in the scatter plot
    //4. The mouseout event should remove the highlight from the corresponding points in the scatter plot
    //5. You can refer to the code in the drawScatterPlot function
    barChatLayer.selectAll('.bar').remove();
    barChatLayer.selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', d => `bar ${d.station.replace(/[^a-zA-Z]/g, "")}`)
        .attr('x', d => xScale(d.station))
        .attr('y', d => yScale(d.end))
        .attr('width', xScale.bandwidth())
        .attr('height', d => barChartHeight - yScale(d.end))
        .style('fill', 'steelblue')
        .style('stroke', 'black')
        .style('stroke-width', 2)
        .on("mouseover", (event, d) => {
            console.log(event);
            console.log(d);

            d3.select(event.target)
                .style("fill", "red");

            const stationClass = d.station.replace(/[^a-zA-Z]/g, "");
            d3.selectAll(".highlight-background")
                .style("opacity", .5)
                .raise();
            d3.selectAll(`.${stationClass}`)
                .attr("r", 10)
                .style("fill", "red")
                .raise();


            d3.select(event.target).raise();
        })
        .on('mouseout', (event, d) => {
            d3.select(event.target)
                .style("fill", "steelblue");

            d3.selectAll(".highlight-background").style("opacity", 0).lower();

            const stationClass = d.station.replace(/[^a-zA-Z]/g, "");
            d3.selectAll(`.${stationClass}`)
                .style("fill", "steelblue")
                .attr("r", 5)
                .lower();
        });

    //Task 8: Connect the bar chart with the scatter plot
    //Hint:
    //1. Add a mouseover event to the bar
    //2. The mouseover event should also highlight the corresponding points in the scatter plot

}