<?php

namespace Drupal\ckeditor_widgets\Plugin\Filter;

use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\Core\Session\AccountProxyInterface;
use Drupal\filter\FilterProcessResult;
use Drupal\filter\Plugin\FilterBase;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Render\RendererInterface;

/**
 * The filter to turn tokens inserted into the WYSIWYG into videos.
 *
 * @Filter(
 *   title = @Translation("Display accordion"),
 *   id = "widgetaccordion",
 *   description = @Translation("Enables jQuery UI Accordion plugin"),
 *   type = Drupal\filter\Plugin\FilterInterface::TYPE_MARKUP_LANGUAGE
 * )
 */
class WidgetAccordion extends FilterBase implements ContainerFactoryPluginInterface {

  /**
   * The renderer.
   *
   * @var \Drupal\Core\Render\RendererInterface
   */
  protected $renderer;

  /**
   * The current user.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;

  /**
   * {@inheritdoc}
   */
  public function process($text, $langcode) {
    $response = new FilterProcessResult($text);
    if (preg_match('/data-accordion=/', $text)) {
      // Add the Widget Accordion library.
      $response->addAttachments(['library' => ['ckeditor_widgets/widgets_accordion.load']]);
      $response->setCacheContexts(['user.permissions']);
    }


    return $response;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static($configuration, $plugin_id, $plugin_definition);
  }

}
