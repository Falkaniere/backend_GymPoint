import Students from '../models/Students';

class StudentsController {
  async store(req, res) {
    const { name, email } = req.body;

    const studentExist = await Students.findOne({ where: { email } });

    if (studentExist) {
      res.status(400).json({ erro: 'Student it´s already register' });
    }

    const { age, weight, height } = Students.create(req.body);

    return res.json({
      name,
      email,
    });
  }
}

export default new StudentsController();
