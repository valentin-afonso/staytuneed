export const queryFavouriteArticles = `
query FavouriteArticles {
  favourite {
    title
    article {
      id
      teaser
      title
      readingTime
      slug
      tags {
        libelle
        id
      }
      image {
        width
        height
        alt(locale: fr)
        blurUpThumb
        url
      }
    }
  }
}`;
