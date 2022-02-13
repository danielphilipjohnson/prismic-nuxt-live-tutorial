

const type = (
    await $prismic.api.query(
      $prismic.predicates.at("document.type", "blog"), 
      { pageSize: 1,page: 1 }
    )
  ).results;



    // type.prev_page
    // type.page
    // type.total_pages
    // type.next_page will give us the next set of data to paginate
    // build logic for this