# Notes

`gatsby develop`

## GQL Testing Query
```gql
# Welcome to GraphiQL
#
# GraphiQL is an in-browser tool for writing, validating, and
# testing GraphQL queries.
#
# Type queries into this side of the screen, and you will see intelligent
# typeaheads aware of the current GraphQL type schema and live syntax and
# validation errors highlighted within the text.
#
# GraphQL queries typically start with a "{" character. Lines that starts
# with a # are ignored.
#
# An example GraphQL query might look like:
#
#     {
#       field(arg: "value") {
#         subField
#       }
#     }
#
# Keyboard shortcuts:
#
#  Prettify Query:  Shift-Ctrl-P (or press the prettify button above)
#
#       Run Query:  Ctrl-Enter (or press the play button above)
#
#   Auto Complete:  Ctrl-Space (or just start typing)
#
{
  allJobsJson {
    edges {
      node {
        id,
        title
      }
    }
  },
  allFile {
    edges {
      node {
        id,
        name,
        relativePath,
        children {
          id
        },
        internal {
          contentDigest
          mediaType
          type
          description
          owner
        },
        ext
      }
    }
  }
}
```
http://localhost:8000/___graphql

```gql
{
  allJobsJson {
    edges {
      node {
        id
        title
        startDate {
          day
        }
        internal {
          type
        }
        jobAccomplishments
        fields {
          slug
        }
      }
    }
  }
  allFile {
    edges {
      node {
        id
        name
        relativePath
        children {
          id
        }
        internal {
          contentDigest
          mediaType
          type
          description
          owner
          description
        }
        ext
      }
    }
  }
  jobsJson {
    id
    fields {
      slug
    }
  },
  config {
    id
    url
    name
    address
  }
}
```

Regex for transforming lists
$
',\n priority: 1 },
",\n\t "skills": [], \n\t"priority": 1 },

^(?! )
{\n\t "content": '

^(?!\t)
 {\n\t "content": "


Pages query:
```
query siteMeta {
  __typename
  allFile(filter: {sourceInstanceName: {eq: "basePages"}}) {
    nodes {
      relativePath
      base
      name
      sourceInstanceName
      internal {
        type
        contentDigest
        description
        mediaType
      }
      fields {
        slug
      }
      childMarkdownRemark {
        id
        html
        frontmatter {
          title
        }
      }
    }
  }
}
```

```
<form
				action="mailto:form@jgasspoore.com"
				id="mailform"
				method="get"
				encType="text/plain"
			>
				<div>
					<label htmlFor="name">
						Name:
						<input type="text" name="name" id="name" />
					</label>
				</div>
				<div>
					<label htmlFor="email">
						Email:
						<input type="text" name="email" id="email" />
					</label>
				</div>
				<div>
					<label>What would you like me to know?:</label>
					<br />
					<textarea name="comments" rows="12" cols="35"></textarea>
				</div>
				<div>
					<input type="submit" name="submit" value="Send" />
					<input type="reset" name="reset" value="Clear Form" />
				</div>
			</form>
```
