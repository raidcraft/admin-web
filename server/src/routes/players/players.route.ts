import { logger } from '@/services';
import { NextFunction, Request, Response } from 'express';
import { BaseRoute } from '../route';
import { PlayerService } from 'services/player.service';

/**
 * @api {get} /ping Ping Request customer object
 * @apiName Ping
 * @apiGroup Ping
 *
 * @apiSuccess {String} type Json Type.
 */
export class PlayersRoute extends BaseRoute {
  public static path = '/players';
  private static instance: PlayersRoute;

  private playerService = new PlayerService();

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
    if (!PlayersRoute.instance) {
      PlayersRoute.instance = new PlayersRoute();
    }
    return PlayersRoute.instance.router;
  }

  private init() {
    // log
    logger.info('[PlayersRoute] Creating players route.');

    // add index page route
    this.router.get('/', this.get);
  }

  /**
   * @class PingRoute
   * @method get
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @param next {NextFunction} Execute the next method.
   */
  private async get(req: Request, res: Response, next: NextFunction) {
    res.json(await this.playerService.getAll());
    next();
  }
}
