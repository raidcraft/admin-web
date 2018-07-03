import { logger } from '@/services';
import { NextFunction, Request, Response } from 'express';
import { BaseRoute } from '../route';
import { ItemsService } from 'services/items.service';
import * as jwtAuthz from 'express-jwt-authz';

/**
 * @api {get} /ping Ping Request customer object
 * @apiName Ping
 * @apiGroup Ping
 *
 * @apiSuccess {String} type Json Type.
 */
export class ItemsRoute extends BaseRoute {
  public static path = '/items';
  private static instance: ItemsRoute;

  private itemsService = new ItemsService();

  /**
   * @class PlayerRoute
   * @constructor
   */
  private constructor() {
    super();
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.init();
  }

  static get router() {
    if (!ItemsRoute.instance) {
      ItemsRoute.instance = new ItemsRoute();
    }
    return ItemsRoute.instance.router;
  }

  private init() {
    // log
    logger.info('[ItemsRoute] Creating items route.');

    this.router.get('/', jwtAuthz(['read:items']), this.get);
    this.router.post('/', jwtAuthz(['write:items']), this.post);
  }

  /**
   * @class PingRoute
   * @method get
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @param next {NextFunction} Execute the next method.
   */
  private async get(req: Request, res: Response, next: NextFunction) {
    res.json(await this.itemsService.getAll());
    next();
  }

  private async post(req: Request, res: Response, next: NextFunction) {
    res.json(await this.itemsService.createItem(req.body));
    next();
  }
}
