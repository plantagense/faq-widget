export const CONTACTS = `query ($path: String, $language: String, $pathResolutionMethods: [PathResolutionMethodArgs]) {
  catalogue(path: $path, language: $language, version: published, pathResolutionMethods: $pathResolutionMethods) {
  name
    contacts: component(id: "defaultcontacts") {
      content {
        ... on ItemRelationsContent {
          items {
            icon: component(id: "picture") {
              content {
                ... on ImageContent {
                  firstImage {
                    url
                    altText
                  }
                }
              }
            }
						title: component(id: "name") {
              content {
                ... on SingleLineContent {
                   text
                 	}
                }
              }
            description: component (id: "description") {
              content {
                ... on RichTextContent {
                  json
                }
              }
            }
            email:component (id: "email") {
              content {
                ... on SingleLineContent {
                  text
                }
              }
            }
          }
        }
      }
    }
  }
}`;
