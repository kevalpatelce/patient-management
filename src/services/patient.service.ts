import dynamo from "../db/dynamo";
import { v4 as uuidv4 } from "uuid";

const TableName = process.env.PATIENTS_TABLE!;

export async function createPatient(data: any) {
  const id = uuidv4();

  const item = {
    id,
    name: data.name,
    address: data.address,
    conditions: data.conditions || [],
    allergies: data.allergies || []
  };

  await dynamo.put({
    TableName,
    Item: item,
  }).promise();

  return item;
}

export async function getPatient(id: string) {
  const result = await dynamo.get({
    TableName,
    Key: { id },
  }).promise();

  return result.Item;
}

export async function getAllPatients() {
  const result = await dynamo.scan({
    TableName,
  }).promise();

  return result.Items;
}

export async function updatePatient(id: string, data: any) {
  const params = {
    TableName,
    Key: { id },
    UpdateExpression:
      "set #name = :name, #address = :address, #conditions = :conditions, #allergies = :allergies",
    ExpressionAttributeNames: {
      "#name": "name",
      "#address": "address",
      "#conditions": "conditions",
      "#allergies": "allergies"
    },
    ExpressionAttributeValues: {
      ":name": data.name,
      ":address": data.address,
      ":conditions": data.conditions || [],
      ":allergies": data.allergies || []
    },
    ReturnValues: "ALL_NEW"
  };

  const result = await dynamo.update(params).promise();
  return result.Attributes;
}

export async function deletePatient(id: string) {
  await dynamo.delete({
    TableName,
    Key: { id },
  }).promise();

  return { message: "Patient deleted" };
}
