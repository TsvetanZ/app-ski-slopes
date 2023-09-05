const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const URL_PATTERN = /^https?:\/\/.+$/i;

const themeSchema = new mongoose.Schema({
    themeName: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
         validate: {
            validator: (value) => URL_PATTERN.test(value), 
            message: 'Block image is not valid'
        }
    },
    subscribers: [{
        type: ObjectId,
        ref: "User"
    }],
    userId: {
        type: ObjectId,
        ref: "User"
    },
    posts: [{
        type: ObjectId,
        ref: "Post"
    }],
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Theme', themeSchema);
