import {gql} from '@apollo/client'
import {wpDataEndpoints} from '@/api/wordpress/connector'
import commentsFields from '@/api/wordpress/_partials/commentsFields'

// Mutation: Add a comment to the given post
const mutationAddComment = gql`
  mutation ADD_COMMENT(
    $author: String
    $authorEmail: String
    $authorUrl: String
    $postId: Int!
    $content: String!
  ) {
    createComment (
      input: {
        author: $author,
        authorEmail: $authorEmail,
        authorUrl: $authorUrl,
        commentOn: $postId,
        content: $content
      }
    ) @rest(type: "Comments", path: "${wpDataEndpoints.comments}?{args}") {
      comment {
        ${commentsFields}
      }
    }
  }
`

export default mutationAddComment
