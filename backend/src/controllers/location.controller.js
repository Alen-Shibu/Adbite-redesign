import Location from '../models/location.model.js';

export const getLocations = async (req, res) => {
  try {
    const locations = await Location.find({}).sort({ order: 1 });
    res.json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createLocation = async (req, res) => {
  const { district, description, venues, order } = req.body;

  try {
    const districtExists = await Location.findOne({ district });
    if (districtExists) {
      return res.status(400).json({ message: 'District already exists' });
    }

    const location = new Location({
      district,
      description,
      venues: venues || [],
      order: order || 0
    });

    const createdLocation = await location.save();
    res.status(201).json(createdLocation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateLocation = async (req, res) => {
  const { district, description, venues, order } = req.body;

  try {
    const location = await Location.findById(req.params.id);

    if (location) {
      location.district = district || location.district;
      location.description = description !== undefined ? description : location.description;
      location.venues = venues || location.venues;
      location.order = order !== undefined ? order : location.order;

      const updatedLocation = await location.save();
      res.json(updatedLocation);
    } else {
      res.status(404).json({ message: 'District entry not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteLocation = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);

    if (location) {
      await Location.deleteOne({ _id: req.params.id });
      res.json({ message: 'District and its venues removed successfully' });
    } else {
      res.status(404).json({ message: 'District entry not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};