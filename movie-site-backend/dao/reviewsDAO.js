import mongodb from "mongodb"

const ObjectId = mongodb.ObjectId

let reviews

export default class ReviewsDAO {
    static async injectDB(conn) {
        if (reviews) {
            return
        }
        try {
            reviews = await conn.db("reviews").collection("reviews")
        } catch (e) {
            console.error(`Unable to establish collection handles in userDAO: ${e}`)
        }
    }

    static async addReview(movieId, user, review) {
        try {
            const reviewDoc = {
                movieId: movieId,
                user: user,
                review: review
            }

            return await reviews.insertOne(reviewDoc)
        } catch (e) {
            console.error(`Unable to post review ${e}`)
            return { error: e }
        }
    }

    static async getReview(reviewId) {
        try {
            return await reviews.findOne({ _id: ObjectId(reviewId) })
        } catch (e) {
            console.error(`Unable to find review: ${e}`)
            return { error: e }
        }
    }

    static async updateReview(reviewId, user, review) {
        try {
            const updateResponse = await reviews.updateOne(
                { _id: ObjectId(reviewId) },
                { $set: { user: user, review: review } }
            )

            return updateResponse
        } catch (e) {
            console.error(`Unable to update review: ${e}`)
            return { error: e }
        }
    }
}