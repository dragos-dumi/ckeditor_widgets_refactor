<?php

/**
 * @file
 * Definition of \Drupal\ckeditor_widgets\Plugin\CKEditorPlugin\WidgetAccordion.
 */
namespace Drupal\ckeditor_widgets\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginBase;

/**
 * Defines the "widget_accordion" plugin.
 *
 * @CKEditorPlugin(
 *   id = "widget_accordion",
 *   label = @Translation("CKEditor Accordion Widget"),
 *   module = "ckeditor_widgets"
 * )
 */
class WidgetAccordion extends CKEditorPluginBase {

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  function getFile() {
    return drupal_get_path('module', 'ckeditor_widgets') . '/js/plugins/widget_accordion/plugin.js';
  }

  /**
   * {@inheritdoc}
   */
  public function getDependencies(Editor $editor) {
    return array();
  }
  /**
   * {@inheritdoc}
   */
  public function getLibraries(Editor $editor) {
    return array();
  }

  /**
   * {@inheritdoc}
   */
  public function isInternal() {
    return FALSE;
  }

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginButtonsInterface::getButtons().
   */
  function getButtons() {
    return array(
      'widget_accordion' => array(
        'image' => drupal_get_path('module', 'ckeditor_widgets') . '/js/plugins/widget_accordion/icon.png',
        'label' => $this->t('Accordion'),
      ),
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor) {
    return array();
  }
}
