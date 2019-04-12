(function() {
  var count = 3;
  var data = d3.range(count * 40).map(function(i) {
    var index = Math.floor(Math.random() * count);
    return 'assets/bg-' + index + '.png';
  });

  var $flower = d3
    .select('.header__bg')
    .selectAll('.flower')
    .data(data)
    .enter()
    .append('div')
    .attr('class', 'flower');

  $flower
    .append('img')
    .attr('src', function(d) {
      return d;
    })
    .style('opacity', 0)
    .style('transform', function() {
      var ran = Math.floor(Math.random() * 360);
      return 'rotate(' + ran + 'deg)';
    })
    .transition()
    .duration(2000)
    .ease(d3.easeCubicInOut)
    .delay(function() {
      return Math.round(Math.random() * 5000);
    })
    .style('opacity', 0.5);
})();
