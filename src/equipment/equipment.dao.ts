import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Equipment } from "./equipment.model";
import {equipmentQueries} from './equipment.queries';

export const readEquipment = async() =>
{
    console.log("In readEquipment DAO");
    return execute<Equipment[]>(equipmentQueries.readEquipment, [])
};
export function readEquipmentByEquipmentId(equipmentId: number): any {
    console.log("In readEquipmentByEquipmentId DAO");
   return execute<Equipment[]>(equipmentQueries.readEquipmentByEquipmentId, [equipmentId])
}
export const createEquipment = async(equipment : Equipment) =>
{
    console.log("In createEquipment DAO");
    
    return execute<OkPacket>(equipmentQueries.createEquipment, [equipment.id,equipment.type, equipment.brand, equipment.description, equipment.price])
};
export function updateEquipment(equipment : Equipment): OkPacket | PromiseLike<OkPacket> {
    console.log("In updateEquipment DAO");
    return execute<OkPacket>(equipmentQueries.updateEquipment,[equipment.id, equipment.type, equipment.brand, equipment.description, equipment.price, equipment.id])
};
export function deleteEquipment(equipmentId: number) {
    console.log("In deleteEquipment DAO");
    return execute<OkPacket>(equipmentQueries.deleteEquipment,[equipmentId])
};


