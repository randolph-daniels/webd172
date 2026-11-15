const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
title: {
type: String,
required: [true, 'Course title is required'],
trim: true
},
department: {
type: String,
required: [true, 'Department is required'],
trim: true
},
units: {
type: Number,
required: [true, 'Units are required'],
min: [0, 'Units cannot be negative']
},
delivery: {
type: String,
required: [true, 'Delivery mode is required'],
enum: ['In-Person', 'Online', 'Hybrid'],
trim: true
}
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);