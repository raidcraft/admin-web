import { logger, ActionApiService } from '@/services';
import { NextFunction, Request, Response } from 'express';
import { BaseRoute } from '../route';
import * as jwtAuthz from 'express-jwt-authz';

export class ActionApiRoute extends BaseRoute {
  public static path = '/art';
  private static instance: ActionApiRoute;

  private actionApiService = new ActionApiService();

  /**
   * @class PlayerRoute
   * @constructor
   */
  private constructor() {
    super();
    this.get = this.get.bind(this);
    this.init();
  }

  static get router() {
    if (!ActionApiRoute.instance) {
      ActionApiRoute.instance = new ActionApiRoute();
    }
    return ActionApiRoute.instance.router;
  }

  private init() {
    // log
    logger.info('[ItemsRoute] Creating art route.');

    this.router.get('/', jwtAuthz(['read:art']), this.get);
  }

  private async get(req: Request, res: Response, next: NextFunction) {
    res.json(await this.actionApiService.getAll());
    next();
  }
}
