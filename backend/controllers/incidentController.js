import { Incident } from "../models/incidentModel.js";

export const getIncidents = async (req, res) => {
    try {
        const incidents = await Incident.find();
        res.status(200).json(
            {
                message: "OK",
                data: incidents,
            }
        );
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve incidents", error: error.message });
    }
}

export const addIncident = async (req, res) => {
    const { title, description, severity } = req.body;

    const allowedSeverities = ['Low', 'Medium', 'High'];
    if (!title || !description || !severity) {
        return res.status(400).json({ message: "Title, description, and severity are required." });
    }

    if (!allowedSeverities.includes(severity)) {
        return res.status(400).json({ message: "Severity must be one of: Low, Medium, High." });
    }

    try {
        const newIncident = new Incident({
            title,
            description,
            severity,
        });

        const savedIncident = await newIncident.save();

        res.status(201).json({
            message: "Incident logged successfully",
            data: {
                id: savedIncident._id,
                title: savedIncident.title,
                description: savedIncident.description,
                severity: savedIncident.severity,
                createdAt: savedIncident.createdAt,
            },
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to log the incident", error: error.message });
    }
};

export const findIncident = async (req, res) => {
    const { id } = req.params;

    try {
        const incident = await Incident.findById(id);

        if (!incident) {
            return res.status(404).json({ message: "Incident not found" });
        }

        res.status(200).json({
            message: "Incident found",
            data: {
                id: incident._id,
                title: incident.title,
                description: incident.description,
                severity: incident.severity,
                createdAt: incident.createdAt,
            },
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve the incident", error: error.message });
    }
}

export const deleteIncident = async (req, res) => {
    const { id } = req.params;

    try {
        const incident = await Incident.findByIdAndDelete(id);

        if (!incident) {
            return res.status(404).json({ message: "Incident not found" });
        }

        res.status(200).json({ message: "Incident deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete the incident", error: error.message });
    }
}