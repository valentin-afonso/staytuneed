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
      author {
        id
        firstname
        lastname
        social
        socialUrl
        pictureProfil {
          url
          width
          height
        }
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
