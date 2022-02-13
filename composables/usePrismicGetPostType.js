export const usePrismicGetPostType = async function ({
  typeName,
  $prismic,
}) {

  if (!typeName) {
    throw new Error(`Please provide a type name`);
  }

  if (!$prismic) {
    throw new Error(`Prismic is required to get a document type`);
  }

  const type = (
    await $prismic.api.query([
      $prismic.predicates.at("document.type", typeName),
    ])
  ).results;

  return type;
};

export default usePrismicGetPostType;
/**
   * get the relation fields for a document ie get the author of a blog
   *  Example usage
      const blogs = await usePrismicGetPostType({
          typeName: "blog",
          $prismic,
      });
   */
