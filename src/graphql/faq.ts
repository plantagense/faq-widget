export const FAQ = `query ($path: String, $language: String) {
  catalogue(path: $path, language: $language) {
    name
    children {
      ... on Folder {
        name
        type
        id
        icon: component(id: "icon") {
          content {
            ... on ImageContent {
              firstImage {
                url
              }
            }
          }
        }
        children {
          ... on Document {
            type
            faqs: component(id: "questions") {
              content {
                ... on ContentChunkContent {
                  chunks {
                    id
                    content {
                      ... on SingleLineContent {
                        text
                      }
                      ... on RichTextContent {
                        json
                      }
                    }
                  }
                }
              }
            }
          }
          ... on Folder {
            id
            name
            type
            icon: component(id: "icon") {
              content {
                ... on ImageContent {
                  firstImage {
                    url
                  }
                }
              }
            }
            children {
              ... on Document {
                type
                faqs: component(id: "questions") {
                  content {
                    ... on ContentChunkContent {
                      chunks {
                        id
                        content {
                          ... on SingleLineContent {
                            text
                          }
                          ... on RichTextContent {
                            json
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`;
