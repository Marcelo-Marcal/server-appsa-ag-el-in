import { Router } from 'express';
import { listAppointmentsController } from "../modules/units/useCases/listAppointments";

const appointmentsRoutes = Router();

appointmentsRoutes.get('/appointments', async(request, response) => {
  return listAppointmentsController.handle(request, response);

})

export { appointmentsRoutes };

// import { Router } from 'express';

// const appointments = Router();

// appointments.post('/appointments', async (request, response) => {
//   const appointments = request.body;

//   try {
//     if(await appointments.findOne())

//     return response.send({ appointments })

//   } catch (err) {
//     return response.status(500).send({ error: 'Mensagem descrevendo o erro que ocorreu' });
//   }
  

// })

// export { appointments };