import { Request ,RequestHandler, Response} from 'express';
import { Equipment } from './equipment.model';
import * as EquipmentDao from './equipment.dao';
import { OkPacket } from 'mysql';
import { parse } from 'dotenv';

export const readEquipment: RequestHandler = async(req:Request, res:Response) => {
    try
    {
        let equipment;
        let equipmentId = parseInt(req.query.equipmentId as string);

        console.log('equipmentId', equipmentId);
        if(Number.isNaN(equipmentId))
        {
            equipment = await EquipmentDao.readEquipment();
           
        }
        else
        {
            equipment = await EquipmentDao.readEquipmentByEquipmentId(equipmentId);
            
        }
        res.status(200).json(equipment)
    }
    catch(error)
    {
        console.error('[equipment.controller][Error]', error);
        res.status(500).json({message: 'There was an error when fetching albums'});
    
    }
};

export const createEquipment: RequestHandler = async(req:Request, res:Response) => {
    try
    {
        const okPacket : OkPacket = await EquipmentDao.createEquipment(req.body);
        console.log('req.body', req.body);
        res.status(200).json(okPacket);
    
    }
    catch(error)
    {
        console.error('[Equipment.controller][createEquipment][Error]', error);
        res.status(500).json({message: 'There was an error when Creating equipment'});
    }
};

export const updateEquipment: RequestHandler = async(req: Request, res:Response) =>
{
    try
    {

    const okPacket: OkPacket = await EquipmentDao.updateEquipment(req.body);

    console.log('req.body: ', req.body);
    console.log('album', okPacket);

    req.body.equipment(async(equipment: Equipment, index: number) => {
    try
    {
        await EquipmentDao.updateEquipment(equipment);
    }
    catch(error)
    {
        console.error('[Equipment.controller][updateEquipment][Error]', error);
        res.status(500).json({message: 'There was an error updating equipment '});
    }
    
    });
    res.status(200).json(okPacket);


}
catch(error)
{
    console.error('[Equipment.controller][updateEquipment][Error]', error);
    res.status(500).json({message: 'There was an error updating equipment Brand'});

}
}

export const deleteEquipment: RequestHandler = async(req:Request, res:Response) =>
{
    try
    {
     
        let equipmentId = parseInt(req.params.equipmentId as string);

        console.log('equipmentId', equipmentId);
        if(!Number.isNaN(equipmentId))
        {
            const response = await EquipmentDao.deleteEquipment(equipmentId);
            res.status(200).json(response);

        }
        
       
    }
    catch(error)
    {
        console.error('[equipment.controller][deleteEquipment][Error]', error);
        res.status(500).json({message: 'There was an error when deleting equipment'}); 
    }
}
