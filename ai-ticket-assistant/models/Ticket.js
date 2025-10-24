import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: { type: String, enum: ['TODO', 'in_progress', 'closed'], default: 'TODO' },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    },
    priority: String,
    deadline: String,
    helpfulNotes: String,
    relatedSkills: [String],
    createdAt: { type: Date, default: Date.now },

});

export default mongoose.model('Ticket', ticketSchema);

