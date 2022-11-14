let vm = new Vue({
    el: "#app",
    data: {
        taiwanCountry: []
    },
    mounted() {
        fetch('COUNTY_MOI_1090820.json')
            .then(res => res.json())
            .then(result => {
                this.taiwanCountry = result
                this.draw(this.taiwanCountry)
            })
    },
    methods: {
        draw(mapData) {

        }
    }
});

let projection = d3.geoMercator()
    .center([123, 24])
    .scale(5500);

let path = d3.geoPath(projection);

d3.select('g.counties')
    .selectAll("path")
    .data(topojson.feature(mapData, mapData.objects["COUNTY_MOI_1090820"]).features)
    .enter().append("path")
    .attr("d", path);

d3.select('path.county-borders')
    .attr("d", path(topojson.mesh(mapData, mapData.objects["COUNTY_MOI_1090820"], function (a, b) { return a !== b; })));