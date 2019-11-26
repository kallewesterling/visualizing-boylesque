const state = {
  data: [],
  // e.g. user selection
}

function filterData() {
  // filter the raw data according to user selection 
}

function wrangleData(filtered) {
  // wrangles the given filtered data to the format required by the visualizations
}

function createVis() {
  // initialized for creating the visualizations, e.g. setup SVG, init scales, ...

  // Creates sources <svg> element
  const svg = d3.select("#viz");

  console.log('setting attrs');
  svg.attr('width', 600).attr('height', 600);

  const circle = svg.selectAll('circle')
    .data(state.data.edges)
    .enter()
    .append("circle")
    .attr("r", 2.5)
    .attr("cx", function(d, i) { return(1 + i); })
    .attr("cy", function(d, i) { return(1 + i); })

    circle.exit().remove();
    /*
    .join(
      (enter) => {
        console.log('in enter');
        // append an element matching the selector and set constant attributes
        const circles_enter = enter.append('circle');
        circles_enter.attr('r', function(d,i) { console.log(d); console.log(i); })
        return circles_enter;
      },
      // update existing elements
      (update) => update,
      (exit) => {
        // exit phase
        return exit.remove();
      }
    );
    */

  function update(new_data) {
    // updates the specific visualization with the given data 
  }

  // return the update function to be called
  return update;
}

function updateApp() {
  // updates the application
  console.log("updating...")

  const filtered = filterData();
  const new_data = wrangleData(filtered);

  // update visualization
  createVis(new_data);
}

// create a specific instance
// const vis = createVis();

// init interaction, e.g. listen to click events
d3.select("body").on('click', () => {
  // update state
  updateApp();
})

d3.json("data.json").then((data) => {
  // load data, e.g. via d3.json and update app afterwards
  state.data = data;
  updateApp();
});