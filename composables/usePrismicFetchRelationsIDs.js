export const usePrismicFetchRelationsIDs = async function ({
  relationName,
  document,
  $prismic,
}) {
  
  if (!relationName) {
    throw new Error(`Please provide a relation name`);
  }

  if (!$prismic) {
    throw new Error(`Prismic is required to query relations`);
  }

  if (!document) {
    throw new Error(`Prismic document is empty`);
  }

  // check its a collection
  if (document.hasOwnProperty(relationName)) {
    let relationIds = [];

    // check if it is repeatable
    if (document[relationName].length > 0) {
      document[relationName].map((relation) => {
        for (const key in relation) {
          relationIds.push(relation[key].id);
        }
      });
     
      const relations = (await $prismic.api.getByIDs(relationIds)).results
      return relations;

    } else {
      // it is a single document
      return [document[relationName].id];
    }
  } else {
    throw new Error(
      `Couldn't find a relation for '${relationName}' in the document provided. Make sure this property exists in the post.'`
    );
  }
};

export default usePrismicFetchRelationsIDs;
/**
 * get the relation fields for a document ie get the author of a blog
 *  Example usage
    const categories = await usePrismicFetchRelationsIDs({
        relationName: "categories",
        document,
        $prismic,
    });
 */