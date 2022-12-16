import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'asdfb',
      label: 'test alpha',
      content:
        'Nam cursus feugiat elit, vel ultrices nulla mattis vitae. Etiam ut metus neque. Maecenas eros neque, cursus vitae fermentum vel, vulputate a est. Etiam tellus leo, maximus in posuere a, fermentum in dolor. Aenean facilisis vehicula faucibus. Mauris dictum sapien vitae lobortis facilisis. Sed vel cursus ex, vitae vestibulum massa. Nulla sagittis eu libero id aliquam. Fusce vehicula dui sed massa venenatis, sed varius turpis efficitur. Quisque posuere maximus risus et fermentum. Cras ac mauris sit amet massa consectetur commodo eget sit amet diam. Aliquam nibh elit, eleifend ut nisi id, maximus commodo velit. Quisque risus sapien, blandit nec lacinia eu, blandit vitae justo. Integer tellus eros, fringilla eget euismod sit amet, bibendum quis nisl. Suspendisse laoreet bibendum massa, sit amet consectetur sapien placerat non.',
    },
    {
      id: 'pizcx',
      label: 'test beta',
      content:
        'Nullam lectus felis, finibus et neque in, pretium commodo nisi. Aenean auctor efficitur orci eu interdum. Praesent egestas lobortis massa ullamcorper aliquam. Proin tortor erat, sagittis non porta sit amet, consequat eget neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc ipsum, ullamcorper sit amet suscipit id, eleifend a leo. Sed et sem tellus. Cras eu molestie diam. Mauris erat enim, vehicula non ligula ac, placerat vestibulum odio. Quisque turpis massa, malesuada imperdiet posuere eu, luctus tempus libero. Phasellus accumsan dolor id sem rutrum, non tristique augue pellentesque. In lorem lacus, venenatis in sem non, efficitur vulputate diam. Morbi vestibulum nibh imperdiet neque lacinia, at sodales neque fermentum. Vivamus rutrum est et magna auctor gravida.',
    },
    {
      id: 'nfhqc',
      label: 'test gamma',
      content:
        'Nullam eros neque, vehicula ac faucibus eleifend, ullamcorper non metus. Nullam cursus ullamcorper tellus, eu malesuada magna venenatis ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer at posuere libero, non porta nunc. Etiam metus urna, rutrum in augue in, pulvinar vulputate enim. Vivamus ac fermentum lacus, quis viverra erat. Vivamus consequat mauris ut diam varius, vitae interdum tortor scelerisque. Quisque quis ante mi. Duis eu neque ac dui sodales condimentum. Proin sed lacus pharetra, gravida odio sed, ullamcorper risus. Nulla posuere vehicula commodo. In at sapien maximus, blandit nibh non, imperdiet enim. Duis sodales tempus elit, non congue ante bibendum pellentesque. Donec nec semper quam. Suspendisse ullamcorper augue a tortor eleifend congue. Suspendisse velit dui, consectetur id leo in, pharetra euismod dui.',
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
