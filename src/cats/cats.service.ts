import {Request, Response} from "express";
import {Cat} from "./cats.model";

// READ 고양이 전체 데이터
export const readAllCat = (req: Request, res: Response) => {
    try {
        const cats = Cat;
        res.status(200).send({
            success: true,
            data: {
                cats
            }
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message
        })
    }
};

// READ 특정 고양이 데이터 조회
export const readCat = (req: Request, res: Response) => {
    try {
        const params = req.params;
        const cats = Cat.find((cat) => {
            return cat.id === params.id;
        })

        res.status(200).send({
            success: true,
            data: {
                cats
            }
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message
        })
    }
};

// CREATE 새로운 고양이 추가
export const createCat =  (req: Request, res: Response) => {
    try{
        const data = req.body;
        Cat.push(data);
        res.status(200).send({
            success: true,
            data: { data }
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message
        })
    }
};

export const updateCat = (req: Request, res: Response) => {
    try {
        const params = req.params;
        const body = req.body;
        let result;
        Cat.forEach((cat) => {
            if (cat.id === params.id) {
                cat = body;
                result = cat;
            }
        });
        res.status(200).send({
            success: true,
            data: { result }
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message
        });
    }
};

export const updatePartialCat = (req: Request, res: Response) => {
    try {
        const params = req.params;
        const body = req.body;
        let result;
        Cat.forEach((cat) => {
            if (cat.id === params.id) {
                cat = { ...cat, ...body};
                result = cat;
            }
        });
        res.status(200).send({
            success: true,
            data: { result }
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message
        });
    }
};

export const deleteCat = (req: Request, res: Response) => {
    try {
        const params = req.params;
        const newCat = Cat.filter((cat) => cat.id !== params.id);
        res.status(200).send({
            success: true,
            data: { newCat }
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message
        });
    }
};