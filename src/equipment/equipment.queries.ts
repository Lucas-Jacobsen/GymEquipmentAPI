export const equipmentQueries =
{
    readEquipment : `
    SELECT * FROM equipment`, 

    readEquipmentByEquipmentId: `
    SELECT * FROM equipment WHERE equipment.id LIKE ?
     `, 
    createEquipment: `
    INSERT INTO equipment(id, type, brand, description, price) VALUES(?,?,?,?,?) `,

    updateEquipment: `
    UPDATE 
        cst391.equipment
    SET 
        id=?, type=?, brand=?,description=?,price=?
    WHERE 
        id=?
    `,
    deleteEquipment: `
    DELETE FROM 
        cst391.equipment
    WHERE 
        id=?`
}